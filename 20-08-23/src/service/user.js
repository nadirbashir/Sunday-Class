import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

const filePath = path.join(process.cwd(), 'src', 'db', 'users.json');


export const getAllUsers = () => {
    const users = fs.readFileSync(filePath);
    return JSON.parse(users)
}
export const getByEmail = (email) => {
    const users = getAllUsers();
    return users.find((user) => user.email === email);
}
export const verifyPassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}

export const registerUser = async (email,password) => {
    const users = getAllUsers();
    const found = getByEmail(email);
    if(found){
        throw new Error('user exists')
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    users.push({id: users.length + 1, email, password: hashedPassword});
    fs.writeFileSync(filePath, JSON.stringify(users));
    return {email}
}