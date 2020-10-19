// create map
const map = L.map('mapid').setView([-20.2949361,-40.3080295], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);


//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icon
    marker && map.removeLayer(marker) //if marker exists, remove it

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// photos upload
function addPhotoField() {
    // use container of photos #images
    const container = document.querySelector('#images')
    //took container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // duplicate the last image saved
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verify if the field is empty, if it does, dont add to the container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    //clear the field before adding to container #images
    input.value = ""
    // add the cloned image to container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // delete field
    span.parentNode.remove()
}

function toggleSelect(event) {

    //retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //update input hidden with selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
    
}

function validate(event) {
    // validar se lat e lng estão preenchidos
    const needsLatAndLng = false;   //TERMINAR DESAFIO
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}