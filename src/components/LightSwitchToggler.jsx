import React, { Component } from 'react';

class clr extends Component {
  componentDidMount() {
    const mainNavTtl = document.querySelector('.navHA');
    const moon = document.querySelector('.moon_move');
    
    mainNavTtl.style.color = '#fff';
    const navTogglerIcon = document.querySelector('.navbar-light .navbar-toggler-icon');

    const developersName=document.querySelector('.text-uppercase')
    const occupationTitle = document.querySelector('.occupation')
    

    const navLis = document.querySelectorAll("div.right > .under a");



        navLis.forEach(lis => {
          lis.addEventListener('mouseover', () => {
            lis.style.setProperty('color', 'orange', 'important');
            lis.style.setProperty('transition', '.3s all ease', 'important');

          })
          lis.addEventListener('mouseout', () => {
            lis.style.setProperty('color', '#fff', 'important');
            lis.style.setProperty('transition', '.3s all ease', 'important');
          })
        })


    developersName.style.color='#fff'
    occupationTitle.style.color='#fff'
    // console.log(navTogglerIcon);

    document.querySelectorAll('.nav-link').forEach(navL => navL.style.color='#fff')

    // stop here
    navTogglerIcon.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png)';
    navTogglerIcon.style.border = '0'

    const iconsBorderBurger = document.querySelector('.navbar-light .navbar-toggler')

    iconsBorderBurger.style.border = '0'

    // navbar individual clr chg

    document.querySelectorAll('.navbar-nav .nav-link ').forEach(Nli => {
      Nli.addEventListener('mouseover', () => {
        // Nli.style.color='blue'
      })
    })
    
   

    
   


    const lightDarkInput = document.querySelector('#light-dark');
    lightDarkInput.addEventListener('click', function () {
      // fires when sun scrollbar is switched to sun
      if (lightDarkInput.checked) {
        const mainNavTtl = document.querySelector('.navHA');

        const navLis = document.querySelectorAll("div.right > .under a");
    navLis.forEach(lis => {
      lis.addEventListener('mouseover', () => {
        lis.style.setProperty('color', 'darkcyan', 'important');
        lis.style.setProperty('transition', '.3s all ease', 'important');
      })
      lis.addEventListener('mouseout', () => {
        lis.style.setProperty('color', '#343a40', 'important');
        lis.style.setProperty('transition', '.3s all ease', 'important');
      })
    })
        
        mainNavTtl.style.color = '#343a40';
        document.body.style.setProperty('background', '#ddd', 'important');

          // change switch background when light background
      const switchBckrd = document.querySelector('.switch-light .toggle-light')
      
        switchBckrd.style.background = 'rgb(237, 243, 175)';
        

        // change navbar toggler icon to normal color

        navTogglerIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%280, 0, 0, 0.5%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';


        // main developer's name and occupation clr change

        developersName.style.color='#343a40'
        occupationTitle.style.color = '#343a40'
        
        // nav list items

        document.querySelectorAll('.nav-link').forEach(navL => navL.style.color='#343a40')


      } else {
        // when moon switch is active

        // background back to black
        document.body.style.setProperty('background', 'rgb(3,0,0)', 'important');

        // 
        const mainNavTtl = document.querySelector('.navHA');
        
        mainNavTtl.style.color = '#fff';




        // change navbar toggler icon to normal color

        navTogglerIcon.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png)';
        navTogglerIcon.style.border = '0'


         // nav list items

        document.querySelectorAll('.nav-link').forEach(navL => navL.style.color = '#fff')
        

        // main developer's name and occupation clr change

        developersName.style.color='#fff'
        occupationTitle.style.color = '#fff'


        const switchBckrd = document.querySelector('.switch-light .toggle-light')
      
        switchBckrd.style.background = '#030200';




        const navLis = document.querySelectorAll("div.right > .under a");



        navLis.forEach(lis => {

          lis.addEventListener('mouseover', () => {
            lis.style.setProperty('color', 'orange', 'important');
            lis.style.setProperty('transition', '.3s all ease', 'important');

          })
        
          lis.addEventListener('mouseout', () => {
            lis.style.setProperty('color', '#fff', 'important');
            lis.style.setProperty('transition', '.3s all ease', 'important');
          })
        })


        
      }


    })
  }


  render() {
   return
  }
}

export default clr;
