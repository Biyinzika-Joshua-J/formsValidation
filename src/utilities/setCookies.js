export function setCookies(){
    const hasVisited = sessionStorage.getItem('visited');

if ( !hasVisited  ) {
    sessionStorage.setItem('visited', true);
    return true
}else{
    return false
}
}