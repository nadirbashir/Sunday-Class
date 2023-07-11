export const dummy_data = [
    {id:1, name: 'iphone 5', category: 'mobile', detail: 'iphone 5 details'},
    {id:2, name: 'iphone 6', category: 'mobile', detail: 'iphone 6 details'},
    {id:3, name: 'Mehran', category: 'car', detail: 'mehran details '},
    {id:4, name: 'sofa', category: 'furniture', detail: 'furnitre details'},
]

export const getItems = (category) => {
    if(category === 'mobile'){
        return dummy_data.filter(item => item.category === 'mobile');
    }else if (category === 'car') {
        return dummy_data.filter(item => item.category === 'car');
    }else if (category === 'furniture') {
        return dummy_data.filter(item => item.category === 'furniture');
    }
}

export const getItemDetails = (category,id) => {
    return dummy_data.find(item => item.id == id && item.category === category)
}