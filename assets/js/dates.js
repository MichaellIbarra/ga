const MAIN_PATH = "http://localhost:3000/api/";
const date = new Date();
let currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

// TODO: Obtener el nombre del día de la semana
const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const dayOfWeek = daysOfWeek[date.getDay()];

const currentDateFormatted = dayOfWeek + " - " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

const imageDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
const imageUrl = `/assets/img/banner/${imageDate}.jpg`;

let dates = fetch(MAIN_PATH + "dates/" + currentDate)
    .then((res) => res.json())
    .then((data) => {
        console.log("Mostrando Data " + data);
        if (data != null) {
            document.getElementById("showDate").innerHTML = `
    <p class="text-3xl mb-3 font-extrabold dark:text-white">Hoy es ${currentDateFormatted}</p>
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">${data.NAMEFECHA}</p>
    <p class="text-gray-500 dark:text-gray-400">${data.TITLECAL}</p>
    <br>
    <button data-modal-target="default-modal" data-modal-toggle="default-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Ver Más
    </button>
    <!-- Main modal -->
    <div id="default-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 modal2">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
                        ${currentDateFormatted}
                    </h1>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-blue-800 dark:text-gray-400">
                        ${data.NAMEFECHA}
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        ${data.DESCRIPCAL}
                    </p>
                </div>
<div class="imagen2 hidden lg:flex items-center justify-center rounded-full w-64 h-64">
    <img src="${imageUrl}" alt="clase" class="imagen">
</div>

                <br>
                <!-- Modal footer -->
                <div
                    class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="default-modal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aceptar</button>
                </div>
            </div>
        </div>
    </div>  

      `;
        } else {
            document.getElementById(
                "showDate"
            ).innerHTML = `<p class="font-bold">Hoy es ${currentDateFormatted}</p>`;
        }
    });
