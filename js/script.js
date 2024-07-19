// function updatePrice() {
//     const minSlider = document.getElementById('min-slider');
//     const maxSlider = document.getElementById('max-slider');
//     const minPrice = document.getElementById('min-price');
//     const maxPrice = document.getElementById('max-price');

//     if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
//         minSlider.value = maxSlider.value;
//     }

//     minPrice.textContent = `₹${minSlider.value}`;
//     maxPrice.textContent = `₹${maxSlider.value}`;
// }

// document.getElementById('apply-filter').addEventListener('click', function() {
//     const minPrice = document.getElementById('min-slider').value;
//     const maxPrice = document.getElementById('max-slider').value;

//     alert(`Filtering products with prices between ₹${minPrice} and ₹${maxPrice}`);
  
// });


//sidepanel

/*
* RANGE SLIDER
* adapted from: https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816
*/

// document.addEventListener('DOMContentLoaded', () => {
//     const COLOR_TRACK = "#CBD5E1";
//     const COLOR_RANGE = "#0EA5E9";

//     // Get the sliders and tooltips
//     const fromSlider = document.querySelector('#fromSlider');
//     const toSlider = document.querySelector('#toSlider');
//     const fromTooltip = document.querySelector('#fromSliderTooltip');
//     const toTooltip = document.querySelector('#toSliderTooltip');
//     const scale = document.getElementById('scale');

//     // Get min and max values from the fromSlider element
//     const MIN = parseInt(fromSlider.getAttribute('min')); // scale will start from min value (first range slider)
//     const MAX = parseInt(fromSlider.getAttribute('max')); // scale will end at max value (first range slider)
//     const STEPS = parseInt(scale.dataset.steps); // update the data-steps attribute value to change the scale points

//     function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         if (from > to) {
//             fromSlider.value = to;
//         }
//         setTooltip(fromSlider, fromTooltip);
//     }

//     function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         setToggleAccessible(toSlider);
//         if (from <= to) {
//             toSlider.value = to;
//         } else {
//             toSlider.value = from;
//         }
//         setTooltip(toSlider, toTooltip);
//     }

//     function getParsed(currentFrom, currentTo) {
//         const from = parseInt(currentFrom.value, 10);
//         const to = parseInt(currentTo.value, 10);
//         return [from, to];
//     }

//     function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
//         const rangeDistance = to.max - to.min;
//         const fromPosition = from.value - to.min;
//         const toPosition = to.value - to.min;
//         controlSlider.style.background = `linear-gradient(
//           to right,
//           ${sliderColor} 0%,
//           ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
//           ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
//           ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} 100%)`;
//     }

//     function setToggleAccessible(currentTarget) {
//         const toSlider = document.querySelector('#toSlider');
//         if (Number(currentTarget.value) <= 0) {
//             toSlider.style.zIndex = 2;
//         } else {
//             toSlider.style.zIndex = 0;
//         }
//     }

//     function setTooltip(slider, tooltip) {
//         const value = slider.value;
//         tooltip.textContent = `₹${value}`;
//         const thumbPosition = (value - slider.min) / (slider.max - slider.min);
//         const percent = thumbPosition * 100;
//         const markerWidth = 20; // Width of the marker in pixels
//         const offset = (((percent - 50) / 50) * markerWidth) / 2;
//         tooltip.style.left = `calc(${percent}% - ${offset}px)`;
//     }

//     // function createScale(min, max, step) {
       
//     //     const range = max - min;
//     //     const steps = range / step;
//     //     for (let i = 0; i <= steps; i++) {
//     //         const value = min + (i * step);
//     //         const percent = (value - min) / range * 100;
//     //         const marker = document.createElement('div');
//     //         marker.style.left = `${percent}%`;
//     //         marker.textContent = `₹${value}`;
//     //         scale.appendChild(marker);
//     //     }
//     // }

//     // events
//     fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
//     toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

//     // Initial load
//     fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//     setToggleAccessible(toSlider);
//     setTooltip(fromSlider, fromTooltip);
//     setTooltip(toSlider, toTooltip);
//     createScale(MIN, MAX, STEPS);
// });




//price










document.addEventListener('DOMContentLoaded', () => {
    const COLOR_TRACK = "#CBD5E1";
    const COLOR_RANGE = "#0EA5E9";

    const fromSlider = document.querySelector('#fromSlider');
    const toSlider = document.querySelector('#toSlider');
    const fromTooltip = document.querySelector('#fromSliderTooltip');
    const toTooltip = document.querySelector('#toSliderTooltip');
    const scale = document.getElementById('scale');

    function setTooltip(slider, tooltip) {
        const value = slider.value;
        tooltip.textContent = `₹${value}`;
        const thumbPosition = (value - slider.min) / (slider.max - slider.min);
        const percent = thumbPosition * 100;
        const markerWidth = 20;
        const offset = (((percent - 50) / 50) * markerWidth) / 2;
        tooltip.style.left = `calc(${percent}% - ${offset}px)`;
    }

    fromSlider.oninput = () => setTooltip(fromSlider, fromTooltip);
    toSlider.oninput = () => setTooltip(toSlider, toTooltip);

    setTooltip(fromSlider, fromTooltip);
    setTooltip(toSlider, toTooltip);
});


// grid-list



document.getElementById('listView').addEventListener('click', function() {
    document.querySelector('.list-container').classList.remove('grid-view');
    document.querySelector('.list-container').classList.add('list-view');
  });
  
  document.getElementById('gridView').addEventListener('click', function() {
    document.querySelector('.list-container').classList.remove('list-view');
    document.querySelector('.list-container').classList.add('grid-view');
  });
  


  let tl = gsap.timeline()
let time = gsap.timeline()

tl.from("#nav h1, #nav ul li,#nav h2 ", {
    y:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.2
})

time.from("#left h1", {
    x:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.3
})
time.from("#right img", {
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.1
})

gsap.from(".page2 .box", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:".page2 .box"

})


