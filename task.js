function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1> Thank you for subscribing !<h1>");
    myWindow.document.close();
}