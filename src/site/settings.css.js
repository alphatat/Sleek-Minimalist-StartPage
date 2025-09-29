function addtoClass(className, styles) {
    const elementList = document.getElementsByClassName(className);
    styles = styles.split(" ");
    const j = elementList.length;
    for (let i = 0; i < j; i++) {
        elementList[i].classList.add(...styles);
    }
}


addtoClass ("inner-Div", "flex flex-row items-center justify-between p-[16px]");
addtoClass ("inner-ul", "flex flex-wrap gap-[10px] items-center px-[8px] mb-[14px] py-[20px] border border-gray-400 rounded-[20px]");
addtoClass ("outer-div", "bg-gray-900 px-[20px] rounded-xl mb-6 divide-y divide-gray-400");
addtoClass ("outer-div-bookm", "flex flex-col p-[20px] bg-gray-900 gap-[20px] rounded-[20px]");
addtoClass ("inner-div-bookm", "space-y-[8px]");
addtoClass ("drop-down-select", "bg-gray-800 p-[10px] max-w-[150px] min-w-[100px] h-[40px] rounded-[30px]");