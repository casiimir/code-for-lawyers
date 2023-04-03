const indirizzo = "https://fakestoreapi.com/products"

const cardGenerator = (data, parent) => {
    const wrapper = document.createElement("div")
    const image = document.createElement("img")
    const title = document.createElement("h3")
    const description = document.createElement("p")
    const price = document.createElement("p")

    wrapper.className = "prodotto";
    image.src = data.image
    title.textContent = data.title
    description.textContent = data.description
    price.textContent = data.price

    wrapper.append(image, title, description, price)
    parent.append(wrapper)
}

fetch(indirizzo)
    .then(res => res.json())
    .then(data => data.map(d => cardGenerator(d, document.body)))