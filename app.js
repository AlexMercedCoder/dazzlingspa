const services = [
    {name: "Post-op Massages", description: "Post op lymphatic drainage massages promote healing, reduce swelling after surgery. These gentle massages stimulate lymphatic system, eliminate excess fluids and toxins. They accelerate healing, enhance immunity, alleviate discomfort. Therapists use precise movements to target areas, ensuring optimal results, minimizing complications. These massages enhance well-being, restore balance, offering a soothing solution for a faster recovery.", img: "./img/1.png"},
    {name: "Body slimming and sculpting massages", description: "Contour and shape the body using techniques like deep tissue manipulation, kneading, and lymphatic drainage. They target specific areas, stimulate circulation, break down fat deposits, and tone muscles, reducing cellulite and tightening skin. Therapists customize sessions for individual needs, providing a rejuvenating experience. With their ability to promote inch loss, improve skin texture, and enhance body confidence, these massages offer a non-invasive approach to achieving a slimmer physique.", img: "./img/2.png"},
    {name: "Fibrosis Treatment", description: "Fibrosis treatment after liposuction involves manual techniques like deep tissue massage, myofascial release, and lymphatic drainage. These methods break down scar tissue and adhesions, promoting proper healing. By softening and smoothing affected areas, it improves comfort and aesthetic outcomes, aiding in a quicker recovery.", img: "./img/3.png"},
    {name: "Cellulite Treatment", description: "Indulge in our spa's exceptional cellulite treatments, designed to help you achieve smoother, toned skin. Our expert therapists employ advanced massage techniques, innovative laser and radiofrequency therapies, and provide holistic wellness advice. Experience remarkable results as we target cellulite, boost collagen production, and enhance your natural contours. Join our community of satisfied clients and schedule a consultation today to embark on your journey towards cellulite-free confidence.", img: "./img/4.png"},
    {name: "Buttlifting", description: "Discover the transformative power of our exclusive buttlifting treatments at our spa. Our skilled therapists utilize advanced techniques to sculpt and tone your glutes, enhancing their shape and firmness. Experience a lifted and more defined backside with our proven buttlifting treatments.", img: "./img/5.png"},
    {name: "Arm Reduction Massages", description: "Achieve beautifully sculpted arms with our specialized arm reduction massages. Our skilled therapists use targeted techniques to tone and tighten the arms, reducing unwanted flabbiness and promoting a more defined appearance. Experience the confidence of sleek and slender arms.", img: "./img/6.png"},
    {name: "Chin Reduction", description: "Experience the remarkable effects of our chin reduction massages at our spa. Our skilled therapists utilize specialized techniques to target and tone the chin area, reducing excess fat and promoting a more defined jawline. Discover the confidence of a sleeker, more sculpted chin.", img: "./img/7.png"},
    {name: "Carboxy Therapy", description: "Carboxy therapy is a powerful treatment to slim, tone, reduce stretch marks, and break down fat. By injecting medical-grade carbon dioxide gas, it boosts blood flow, improves oxygenation, and stimulates collagen production. This results in enhanced skin elasticity, reduced cellulite, and smoother texture. Experience the transformative benefits of carboxy therapy for a more sculpted and rejuvenated appearance.", img: "./img/7.png"},
    {name: "", description: "", img: ""}
]

const main = document.querySelector("main")

services.forEach((s, i) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="service">
    
    <img src=${s.img} alt=${s.name}>

    <div class="description">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
    
    </div>
    
    </div>
    `

    main.append(div)
})