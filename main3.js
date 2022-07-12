let value = Number(prompt('Type a number'));
switch ((value >0) ? 1 : (value <0)? -1:0 ) {
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
    default:
        alert(0);
}