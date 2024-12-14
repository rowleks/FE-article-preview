const footer = document.getElementById('footer')
const userInfo = document.getElementById('u-info')
const shareBar = document.getElementById('share')
const arrow = document.getElementById('arrow')
const shareArrow = document.getElementById('share-arrow')

function toggleFooter() {
    footer.classList.toggle('active')
    userInfo.classList.toggle('hide')
    shareBar.classList.toggle('hide')

    if (footer.classList.contains('active'))
    {
        shareArrow.classList.toggle('white')
        arrow.classList.toggle('d-bg')
    }
    else 
    {
        shareArrow.classList.remove('white')
        arrow.classList.remove('d-bg')
    }
}

arrow.addEventListener('click', toggleFooter)