let a = prompt('Username')
let b = prompt('Password')

if ((a.length == 0) || (b.length == 0)) {
    alert('Deyerler bos ola bilmez')
}
else if (a == 'admin' && b == '123456') {
    alert('Tebrikler siz sisteme daxil oldunuz')
}
else {
    if (a != 'admin' && b != '123456') {
        alert('username ve parol sehvdi')
    }
    else if (a != 'admin') {
        alert('username sehvdi')

    }
    else if (b != '123456') {
        alert('password sehvdi')

    }


}