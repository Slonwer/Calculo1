function calularArea(raio) {

    const PI = Math.PI;
      
    const area = PI * Math.pow(raio,2);

    return area;

}

const raio = 5;
const area = caclularArea(raio);

console.log("Area da circuferencia ${raio} do raio ${area}");
