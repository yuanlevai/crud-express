const db = require("../services/db");

// function untuk mengambil data product ke database
function get(id = 0){

    let query = 'select * from products ';
    if (id !== 0 ){
        query += ` where id = ${parseInt(id)}`
    }
    const data = db(query);
    return data
}

function create(data) {
    const query =`insert into products 
    (name, price, description, category_id, status, stock, images ) 
    values (
        "${data.name}", 
        ${data.price}, 
        "${data.description}", 
        ${data.category_id},
        ${data.status},
        ${data.stock}, 
        "")`;
    const insert = db(query);
    return insert
}

function update(data, id) {
    const query = `update products set 
    name="${data.name}", 
    price=${data.price}, 
    description="${data.description}", 
    category_id=${data.category_id}, 
    status=${data.status}, 
    stock=${data.stock},
    images=${data.images} 
    where id=${parseInt(id)}`;

    const update =  db(query);
    return update; 
}

 function remove(id) {
    const query = `delete from products where id=${parseInt(id)}`
    const deleteData =  db(query);
    return deleteData;
}

module.exports = {
    get,
    create,
    update,
    remove
}
