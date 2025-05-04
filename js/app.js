const slider = document.getElementById('release-slider');
const slider2 = document.getElementById('rating-slider');
const currentValue = document.getElementById('current-value');
const currentValue2 = document.getElementById('current-value2');
const gameName = document.querySelector('.game__title')
const gameCaption = document.querySelector('.game__caption')
const gameScore = document.querySelector('.zard')
const gameSince = document.querySelector('.game__since')
const headerStyles = document.querySelector('.header')
const getHeaderStyles = getComputedStyle(headerStyles)
const headerAccordion = document.querySelectorAll('.heaedr_accordion')
const faqBoxElem = document.querySelectorAll('.faq__item')
const coverGame = document.querySelectorAll('.hero_cover_game')
const arrowUpElem = document.querySelector('.show_svg')
const header = document.querySelector('.header')
const menuMobileBtn = document.querySelector('.haburger-menu')
const ddd = document.querySelector('.hamburger-menu_toggle')
const scroll = document.querySelector('.scroll')
const boxes = document.querySelectorAll('.blog_bottom_left_item');
const genresElem = document.querySelectorAll('.genres')
const SearchFilterGameBtn = document.querySelector('.Search_filter_game')
const releaseSliderElem = document.querySelector('#release-slider')
const ratingSliderElem = document.querySelector('#rating-slider')
const filterGameWrapper = document.querySelector('#filter_game')
const monthGamesElem = document.querySelectorAll('.month-game')
const boxCategoriesElem = document.querySelectorAll('.backdrop__categori')
const preloader = document.querySelector('.game-loader')
const signUp = document.querySelector('.sign_up')
const logIn = document.querySelector('.log_in')
const userAuthWrapper = document.querySelector('#auth-box-wrapper')



let percent = 0;
const percentText = document.getElementById('percentage');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const beepSound = document.getElementById('beep-sound');

// * The Pre Loader Site
window.addEventListener('load', () => {

  preloader.classList.add('game-loader_efect')

})









const supabaseURL = "https://scrwqyyvidqahgzmhqwu.supabase.co/rest/v1/All Games";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcndxeXl2aWRxYWhnem1ocXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzIzMzksImV4cCI6MjA2MDU0ODMzOX0.AHUoQPSQ2K2sIUfqCuVui8_4CG84Tcv315AjYbINPj0";


let parentImg;
let coverGameElem = getHeaderStyles.backgroundImage
let searchLogo = document.querySelector('.logo-search')
let searchInput = document.querySelector('.input-search')
let mobileMenuList = document.querySelector('.menu-list_mobile')

let infoGamesArray = [
  { id: 1, title: 'The Witcher 3', description: 'The Witcher 3: Wild Hunt" is an open-world RPG where players follow Geralt of Rivia, a monster hunter, in his quest to find his adopted daughter, Ciri. Set in a richly detailed and expansive world, the game offers a deep narrative and complex choices that affect the games outcome.', score: '93/', since: 'May 19, 2015,', img: 'img/Hero.jpg', genre: 'Action RPG' },


  { id: 2, title: 'Red Dead Redemtion II', description: 'In this open-world action-adventure game, players control Arthur Morgan, an outlaw navigating the downfall of the Wild West. Set in a vast, immersive world, the game follows Arthur’s struggles with loyalty, survival, and morality as his gang faces opposition from law enforcement.', score: '97/', since: 'Oct 26, 2018', img: 'img/RDRcover.jfif', genre: 'Action Advanture' },


  { id: 3, title: 'The Last Of Us II', description: 'The Last of Us Part II continues the emotional journey of Ellie, now older and seeking revenge. Set in a post-apocalyptic world, the game combines stealth and action, forcing players to confront moral dilemmas and the harsh consequences of violence.', score: '93/', since: 'Jun 19, 2020', img: 'img/TLOU2.jfif', genre: 'Action Advanture' },





  { id: 4, title: 'Battlefield V', description: 'Enter mankinds greatest conflict with Battlefield™ V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on immersive, all-out multiplayer with your squad in experiences like the vast Grand Operations and the cooperative', score: '83/', since: 'Nov, 20, 2018', img: 'img/wp3811500-battlefield-v-4k-wallpapers.png', genre: 'Action Shooter' },


  { id: 5, title: 'God Of War: Ragnorag', description: 'In this soft reboot, Kratos embarks on a journey with his son Atreus in the world of Norse mythology. Combining intense combat with a rich narrative, the game explores themes of fatherhood, redemption, and the gods’ power over fate. the game explores themes of fatherhood', score: '94/', since: 'Apr 20, 2018', img: 'img/GOW.jpg', genre: '' }
]



coverGame.forEach(function (games) {

  games.addEventListener('click', function (event) {
    coverGame.forEach(function (removeClass) {
      removeClass.classList.remove('class_coverGame_active')
    })
    event.target.classList.add('class_coverGame_active')
  })
  games.addEventListener('click', function (event) {


    let idImage = event.target.dataset.id
    let isInArrayGames = infoGamesArray.find(function (replace) {
      return replace.id == idImage
    })


    gameName.classList.add('game__info--hidden')
    gameCaption.classList.add('game__info--hidden')
    gameScore.classList.add('game__info--hidden')
    gameSince.classList.add('game__info--hidden')
    setTimeout(function () {
      gameName.innerHTML = isInArrayGames.title
      gameName.classList.remove('game__info--hidden')

      gameCaption.innerHTML = isInArrayGames.description
      gameCaption.classList.remove('game__info--hidden')

      gameScore.innerHTML = isInArrayGames.score
      gameScore.classList.remove('game__info--hidden')

      gameSince.innerHTML = isInArrayGames.since
      gameSince.classList.remove('game__info--hidden')
    }, 600)
    header.style.backgroundImage = `url(${isInArrayGames.img})`

  })
})
faqBoxElem.forEach(function (boxes) {
  boxes.addEventListener('click', function (event) {

    const isActive = boxes.classList.contains('faq__item__active')

    faqBoxElem.forEach(function (items) {
      items.classList.remove('faq__item__active')
    })

    if (!isActive) {
      boxes.classList.toggle('faq__item__active')
    }


  })
})




//* Scroler Website
window.addEventListener('scroll', function () {
  let scrollTop = this.window.scrollY
  let documentHeight = this.document.body.clientHeight
  let windowHeight = this.window.innerHeight

  let scrollPercent = scrollTop / (documentHeight - windowHeight)
  let scrollPercentRound = Math.round(scrollPercent * 100)

  scroll.style.width = scrollPercentRound + '%'
})
searchLogo.addEventListener('click', function () {
  searchInput.classList.toggle('input-search--toggle')
})
menuMobileBtn.addEventListener('click', function () {
  menuMobileBtn.classList.toggle('haburger-menu--sss')
  ddd.classList.toggle('hamburger-menu_toggle--close')
  mobileMenuList.classList.toggle('menu-list_mobile--open')
})




//* Request to Server And Get All Games
const filtredGames = async () => {
  const response = await fetch(supabaseURL, {
    method: "GET",
    headers: {
      apikey: supabaseApiKey,
      Authorization: `Bearer ${supabaseApiKey}`,
    },
  })
    .then(res => res.json())
    .then(data => searchByFilters(data))
}




// * Search Games By Filters
let releaseGame = ''
let ratingGame = ''
genresElem.forEach(items => {
  items.addEventListener('click', (e) => {
    genresElem.forEach(items => {
      items.classList.remove('genres-active')
    })
    e.target.classList.add('genres-active')

  })
});
releaseSliderElem.addEventListener('input', (e) => {
  currentValue.textContent = e.target.value;
  releaseGame = e.target.value
})
ratingSliderElem.addEventListener('input', (e) => {
  currentValue2.innerHTML = e.target.value;
  ratingGame = e.target.value
})
monthGamesElem.forEach(items => {

  items.addEventListener('click', (e) => {
    monthGamesElem.forEach(element => {
      element.classList.remove('month-game_active')
    });
    e.target.classList.add('month-game_active')
    document.querySelector('#cover-month-game').src = e.target.src
  })

})
const searchByFilters = (data) => {
  const gameGenre = document.querySelector('.genres-active')?.innerHTML
  const inputSearchValue = document.querySelector('#input_search').value
  const platformsElem = document.querySelector('.platforms').value;

  const filteredGames = data.filter((games) => {

    return (!releaseGame || games.release.slice(0, 4) < +releaseGame) &&
      (!ratingGame || games.score <= +ratingGame) &&
      (!gameGenre || games.genre === gameGenre) &&
      (!inputSearchValue || games.title.toLowerCase().includes(inputSearchValue.toLowerCase())) &&
      (!platformsElem || games.platforms.includes(platformsElem))

  })

  console.log(filteredGames);
  filterGameWrapper.innerHTML = ''


  if (filteredGames.length === 0) {
    filterGameWrapper.insertAdjacentHTML('beforeend',
      `
                   <div id="search-result__wrapper">
                         <h3 id="search-result"> Game is Not Found :( </h3>
                   </div>
                `
    )
  } else {
    filteredGames.forEach(items => {
      filterGameWrapper.insertAdjacentHTML('beforeend',
        `
                    <div class="filter_game_item">
                          <div class="filter_img">
                            <img src="${items.coverimg}" alt="">
                          </div>
            
                          <h3 class="filter_game_name">${items.title}</h3>
                          <div class="filter_game_info">
                            <div>
                              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.673 0.5C5.85865 0.5 6.0367 0.57375 6.16797 0.705025C6.29925 0.836301 6.373 1.01435 6.373 1.2V2.509H13.89V1.209C13.89 1.02335 13.9637 0.845301 14.095 0.714025C14.2263 0.58275 14.4043 0.509 14.59 0.509C14.7757 0.509 14.9537 0.58275 15.085 0.714025C15.2162 0.845301 15.29 1.02335 15.29 1.209V2.509H18C18.5303 2.509 19.0388 2.71958 19.4139 3.09443C19.7889 3.46929 19.9997 3.97774 20 4.508V18.501C19.9997 19.0313 19.7889 19.5397 19.4139 19.9146C19.0388 20.2894 18.5303 20.5 18 20.5H2C1.46974 20.5 0.961184 20.2894 0.58614 19.9146C0.211096 19.5397 0.00026513 19.0313 0 18.501L0 4.508C0.00026513 3.97774 0.211096 3.46929 0.58614 3.09443C0.961184 2.71958 1.46974 2.509 2 2.509H4.973V1.199C4.97327 1.01352 5.04713 0.835731 5.17838 0.704672C5.30963 0.573612 5.48752 0.5 5.673 0.5ZM1.4 8.242V18.501C1.4 18.5798 1.41552 18.6578 1.44567 18.7306C1.47583 18.8034 1.52002 18.8695 1.57574 18.9253C1.63145 18.981 1.69759 19.0252 1.77039 19.0553C1.84319 19.0855 1.92121 19.101 2 19.101H18C18.0788 19.101 18.1568 19.0855 18.2296 19.0553C18.3024 19.0252 18.3685 18.981 18.4243 18.9253C18.48 18.8695 18.5242 18.8034 18.5543 18.7306C18.5845 18.6578 18.6 18.5798 18.6 18.501V8.256L1.4 8.242ZM6.667 15.119V16.785H5V15.119H6.667ZM10.833 15.119V16.785H9.167V15.119H10.833ZM15 15.119V16.785H13.333V15.119H15ZM6.667 11.142V12.808H5V11.142H6.667ZM10.833 11.142V12.808H9.167V11.142H10.833ZM15 11.142V12.808H13.333V11.142H15ZM4.973 3.908H2C1.92121 3.908 1.84319 3.92352 1.77039 3.95367C1.69759 3.98382 1.63145 4.02802 1.57574 4.08374C1.52002 4.13945 1.47583 4.20559 1.44567 4.27839C1.41552 4.35119 1.4 4.42921 1.4 4.508V6.843L18.6 6.857V4.508C18.6 4.42921 18.5845 4.35119 18.5543 4.27839C18.5242 4.20559 18.48 4.13945 18.4243 4.08374C18.3685 4.02802 18.3024 3.98382 18.2296 3.95367C18.1568 3.92352 18.0788 3.908 18 3.908H15.29V4.837C15.29 5.02265 15.2162 5.2007 15.085 5.33197C14.9537 5.46325 14.7757 5.537 14.59 5.537C14.4043 5.537 14.2263 5.46325 14.095 5.33197C13.9637 5.2007 13.89 5.02265 13.89 4.837V3.908H6.373V4.828C6.373 5.01365 6.29925 5.1917 6.16797 5.32297C6.0367 5.45425 5.85865 5.528 5.673 5.528C5.48735 5.528 5.3093 5.45425 5.17803 5.32297C5.04675 5.1917 4.973 5.01365 4.973 4.828V3.908Z" fill="white"></path>
                              </svg>
                              <span class="relese-games-filtred">${items.release}</span>
                            </div>
            
                            <div>
                              <img class="meta" src="img/simple-icons_metacritic.png" alt="">
                              <p><span>${items.score}</span>/100</p>
                            </div>
                          </div>
            
                          <div class="filter_game_buy">
                            <div class="nmt">
                              <del class="del">60$</del>
                              <span class="new_price">42<span>$</span></span>
                              <span class="percent_game">30%</span>
                            </div>
            
                            <div class="buy_game_filter">
                              <a href="#">
                                Buy Now
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.5535 4.85355C15.7488 4.65829 15.7488 4.34171 15.5535 4.14645L12.3716 0.964466C12.1763 0.769204 11.8597 0.769204 11.6644 0.964466C11.4692 1.15973 11.4692 1.47631 11.6644 1.67157L14.4929 4.5L11.6644 7.32843C11.4692 7.52369 11.4692 7.84027 11.6644 8.03553C11.8597 8.2308 12.1763 8.2308 12.3716 8.03553L15.5535 4.85355ZM0.199982 5H15.2V4H0.199982V5Z" fill="#FF5733"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                    `
      )
    })
    console.log('Thats Good :)');
  }
}



// * Categories
boxCategoriesElem.forEach(boxes => {

  boxes.addEventListener('click', (e) => {
    console.log(e.target.dataset.cat);
    goToCategory(e)
  })

})
function goToCategory(e) {
  const datasetCategory = e.target.dataset.cat

  window.location.href = `./category/index.html?cat=${datasetCategory}`;
}


const athenticationOnThSite = (e) => {
  const checkAuthBtn = e.target.dataset.auth

  userAuthWrapper.innerHTML = ''

  if (checkAuthBtn === 'logIn') {

    userAuthWrapper.insertAdjacentHTML('beforeend',
      `

            <div class="backdrop-blur"></div>

            <div class="blog_bottom_right user-signup">
                 <div class="blog_link_wrapper">
                   <a href="#" class="text-signup">Sign Up</a>
                   <a href="#" class="text-login">Login</a>
                 </div>

                 <form action="#" class="form">
                  

                   <label class="email" for="user_email">E-Mail</label>
                   <div class="input_email">
                     <input type="email" name="" id="user_email" placeholder="Enter Your E-Mail">
                     <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1.75 0H22.25C23.216 0 24 0.784 24 1.75V15.75C24 16.2141 23.8156 16.6592 23.4874 16.9874C23.1592 17.3156 22.7141 17.5 22.25 17.5H1.75C1.28587 17.5 0.840752 17.3156 0.512563 16.9874C0.184374 16.6592 0 16.2141 0 15.75L0 1.75C0 0.784 0.784 0 1.75 0ZM1.5 4.412V15.75C1.5 15.888 1.612 16 1.75 16H22.25C22.3163 16 22.3799 15.9737 22.4268 15.9268C22.4737 15.8799 22.5 15.8163 22.5 15.75V4.412L12.98 10.845C12.388 11.245 11.612 11.245 11.02 10.845L1.5 4.412ZM1.5 1.75V2.602L11.86 9.602C11.9013 9.62994 11.9501 9.64488 12 9.64488C12.0499 9.64488 12.0987 9.62994 12.14 9.602L22.5 2.602V1.75C22.5 1.6837 22.4737 1.62011 22.4268 1.57322C22.3799 1.52634 22.3163 1.5 22.25 1.5H1.75C1.6837 1.5 1.62011 1.52634 1.57322 1.57322C1.52634 1.62011 1.5 1.6837 1.5 1.75Z" fill="white"></path>
                     </svg>
                   </div>








                   <label class="email" for="pass">Password</label>
                   <div class="input_email input_password">
                     <input type="password" name="" id="pass" placeholder="Enter Your Password">
                     <svg class="show-password-eye" viewBox="-2.8 -2.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00028">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.05600000000000001"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path clip-rule="evenodd" d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z" fill="#ffffff" fill-rule="evenodd"></path>
                       </g>
                     </svg>

                     <svg class="hide-password-eye" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z" fill="#ffffff"></path>
                       </g>
                     </svg>
                   </div>

                  





                   <button type="submit">Log In</button>
                   <div class="or">
                     <div class="or_left"></div>
                     <span class="sss">or</span>
                     <div class="or_right"></div>
                   </div>
                   <div class="google">
                     <img src="img/devicon_google.png" alt="">
                     <span>Log In With Google</span>
                   </div>
                 </form>
                </div>
            `
    )

    document.querySelector('.text-login').classList.add('auth-box-active')
    document.querySelector('.text-signup').classList.remove('auth-box-active')

    userAuthWrapper.style.opacity = 1
    userAuthWrapper.style.visibility = 'visible'

  } else {

    userAuthWrapper.insertAdjacentHTML('beforeend',
      `

            <div class="backdrop-blur"></div>

            <div class="blog_bottom_right user-signup">
                 <div class="blog_link_wrapper">
                   <a href="#" class="text-signup">Sign Up</a>
                   <a href="#" class="text-login">Login</a>
                 </div>

                 <form action="#" class="form">
                   <label class="email" for="user_name">User Name</label>
                   <div class="input_name">
                     <input type="text" name="" id="user_name" placeholder="Enter Your User Name">
                     <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6C5 7.06087 5.42143 8.07828 6.17157 8.82843C6.92172 9.57857 7.93913 10 9 10C10.0609 10 11.0783 9.57857 11.8284 8.82843C12.5786 8.07828 13 7.06087 13 6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2ZM3 6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6C15 7.5913 14.3679 9.11742 13.2426 10.2426C12.1174 11.3679 10.5913 12 9 12C7.4087 12 5.88258 11.3679 4.75736 10.2426C3.63214 9.11742 3 7.5913 3 6ZM5 16C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5Z" fill="white"></path>
                     </svg>
                   </div>

                   <label class="email" for="user_email">E-Mail</label>
                   <div class="input_email">
                     <input type="email" name="" id="user_email" placeholder="Enter Your E-Mail">
                     <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1.75 0H22.25C23.216 0 24 0.784 24 1.75V15.75C24 16.2141 23.8156 16.6592 23.4874 16.9874C23.1592 17.3156 22.7141 17.5 22.25 17.5H1.75C1.28587 17.5 0.840752 17.3156 0.512563 16.9874C0.184374 16.6592 0 16.2141 0 15.75L0 1.75C0 0.784 0.784 0 1.75 0ZM1.5 4.412V15.75C1.5 15.888 1.612 16 1.75 16H22.25C22.3163 16 22.3799 15.9737 22.4268 15.9268C22.4737 15.8799 22.5 15.8163 22.5 15.75V4.412L12.98 10.845C12.388 11.245 11.612 11.245 11.02 10.845L1.5 4.412ZM1.5 1.75V2.602L11.86 9.602C11.9013 9.62994 11.9501 9.64488 12 9.64488C12.0499 9.64488 12.0987 9.62994 12.14 9.602L22.5 2.602V1.75C22.5 1.6837 22.4737 1.62011 22.4268 1.57322C22.3799 1.52634 22.3163 1.5 22.25 1.5H1.75C1.6837 1.5 1.62011 1.52634 1.57322 1.57322C1.52634 1.62011 1.5 1.6837 1.5 1.75Z" fill="white"></path>
                     </svg>
                   </div>








                   <label class="email" for="pass">Password</label>
                   <div class="input_email input_password">
                     <input type="password" name="" id="pass" placeholder="Enter Your Password">
                     <svg class="show-password-eye" viewBox="-2.8 -2.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00028">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.05600000000000001"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path clip-rule="evenodd" d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z" fill="#ffffff" fill-rule="evenodd"></path>
                       </g>
                     </svg>

                     <svg class="hide-password-eye" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z" fill="#ffffff"></path>
                       </g>
                     </svg>
                   </div>

                   <label class="email" for="repeat_password">Repeat Password</label>
                   <div class="input_email input_password">
                     <input type="password" name="" id="repeat_password" placeholder="Repeat your password">
                     <svg class="show-password-eye" viewBox="-2.8 -2.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00028">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.05600000000000001"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path clip-rule="evenodd" d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z" fill="#ffffff" fill-rule="evenodd"></path>
                       </g>
                     </svg>

                     <svg class="hide-password-eye" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                       <g id="SVGRepo_iconCarrier">
                         <path clip-rule="evenodd" d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z" fill="#ffffff" fill-rule="evenodd"></path>
                         <path d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z" fill="#ffffff"></path>
                       </g>
                     </svg>
                   </div>





                   <button type="submit">Sign Up</button>
                   <div class="or">
                     <div class="or_left"></div>
                     <span class="sss">or</span>
                     <div class="or_right"></div>
                   </div>
                   <div class="google">
                     <img src="img/devicon_google.png" alt="">
                     <span>Sign Up With Google</span>
                   </div>
                 </form>
                </div>
            `
    )

    document.querySelector('.text-login').classList.remove('auth-box-active')
    document.querySelector('.text-signup').classList.add('auth-box-active')
    userAuthWrapper.style.opacity = 1
    userAuthWrapper.style.visibility = 'visible'
  }
}

// * Submit Btns
signUp.addEventListener('click', athenticationOnThSite)
logIn.addEventListener('click', athenticationOnThSite)
document.querySelectorAll('.login-btn-mobile').forEach(items => {
  items.addEventListener('click', athenticationOnThSite)
})



SearchFilterGameBtn.addEventListener('click', filtredGames)
window.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    filtredGames()
  }
})




// * Eye Icon Inputs Handler 
document.querySelectorAll('.input_password').forEach(wrapper => {
  const input = wrapper.querySelector('input');
  const hideIcon = wrapper.querySelector('.hide-password-eye');
  const showIcon = wrapper.querySelector('.show-password-eye');

  hideIcon.addEventListener('click', () => {
    input.type = 'text';
    hideIcon.style.display = 'none';
    showIcon.style.display = 'block';
  });

  showIcon.addEventListener('click', () => {
    input.type = 'password';
    showIcon.style.display = 'none';
    hideIcon.style.display = 'block';
  });
});


document.body.addEventListener("click", function (event) {
  const backdrop = event.target.closest(".backdrop-blur");
  if (backdrop) {
    userAuthWrapper.style.opacity = 0
    userAuthWrapper.style.visibility = 'hidden'
  }
});




