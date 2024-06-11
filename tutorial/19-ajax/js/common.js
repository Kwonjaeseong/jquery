
const modelList = document.querySelector('.model_list')
const modelData = './db/model.json'
const userData = './db/user.json'


async function getModels() {
    const res = await fetch(modelData)
    const data = await res.json()
    const items = data.model
    console.log(items);



    items.forEach(item => {
        console.log(item);
        const li =document.createElement('li')
        li.innerHTML = `<li>
                            <div class="photo">
                            <img src=${item.img} alt="">
                            </div>
                            <div class="title">${item.title}</div>
                        </li>`

        modelList.append(li)
    });


}

getModels()




const tBody = document.querySelector('.tbl_body')

async function getUsers() {
    const res = await fetch(userData)
    const items = await res.json()

    items.forEach(item => {
        const tr =document.createElement('tr')
        tr.innerHTML = 
                       `<td>${item.id}</td>
                        <td>${item.first_name} ${item.last_name}</td>
                        <td>${item.email}</td>
                        <td>${item.gender}</td>
                        <td>${item.ip_adress}</td>`
        tBody.append(tr)
    });
}

getUsers ()