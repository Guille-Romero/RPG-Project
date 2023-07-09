
console.log('start.js: loaded');
playerClassRecover = localStorage.getItem('Class');

if(playerClassRecover == 'knight'){
    for(stat in knight){
        localStorage.setItem(stat, knight[stat]);
    };
}
else if(playerClassRecover == 'black-mage'){
    for(stat in blackMage){
        localStorage.setItem(stat, blackMage[stat]);
    };
}
else if(playerClassRecover == 'hunter'){
    for(stat in hunter){
        localStorage.setItem(stat, hunter[stat]);
    };
}
else if(playerClassRecover == 'warrior'){
    for(stat in warrior){
        localStorage.setItem(stat, warrior[stat]);
    };
};