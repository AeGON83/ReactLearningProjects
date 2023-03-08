const arr = ['rajan', 'malay', 'parth', 'nayan', 'lol']

const upperArr = arr.map((item) => {
    return item.charAt(0).toUpperCase() + item.substring(1)
})
const addPTag = upperArr.map((item) => {
    return '<p>' + item + '</p>'
})

console.log(addPTag)