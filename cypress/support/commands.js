Cypress.Commands.add('traintickets', (trainTickerbooking) => {
    cy.get('a[href="/train-ticket?utm_source=dwebhome_header_ttb"]').click()
    cy.get('input[id="boarding_from"]').click( {force: true} ).type('b')
    cy.get('ul[id="ui-id-1"]').click()
    cy.get('input[id="boarding_to"]').click().type('g')
    cy.get('ul[id="ui-id-2"]').click()
    cy.get('li[data-value="BHOPAL JN | BPL"]').click({force: true})
    //cy.get('li[class="ui-menu-item"]').should('have.value', 'GORAKHPUR').click()
    cy.get('div[class="container-fluid"]').eq('1').click({force: true})
    //cy.get('span[id="ui-id-209"]').click( {force: true})
    cy.get('li[data-value="GORAKHPUR JN | GKP"]').click({force: true})
    cy.get('p[class="Next_WD_1"]').click()
    cy.get('button[class="detail-submit"]').click()
   // cy.get('div[class="text-center book_now_btn book_tkt_now book_button_12512_3A"]').click()
})

Cypress.Commands.add('interCitySmartBus', (ticketbooking) => {
    cy.get('a[class="RY_vertical IntrCity_bus"]').click()
    cy.get('input[id="id1"]').click( {force: true} ).type('hd')
    cy.get('li[class="AutoInput_suggestion__Gri5M"]').eq('0').click({force: true})
    cy.get('input[id="id2"]').click( {force: true} ).type('dd')
    cy.get('li[class="AutoInput_suggestion__Gri5M"]').eq('0').click({force: true})
    cy.get('div[class="jsx-4cc9b170fe196755 SearchFormWrapper_futureDateItem__Gv4Tu"]').eq('2').click({force: true})
    cy.get('button[class="jsx-4cc9b170fe196755 SearchFormWrapper_searchCta__yDxF_"]').click()
    
})
Cypress.Commands.add('trainInfo', (pnrstatus) => {
    cy.get('span[class="jsx-96366342a1937096 Header_ddBtn__T5q5e"]').eq('0').click()
    cy.get('span[class="Header_ryHeadingSpan__ODDbF"]').eq('1').click()
    cy.get('a[class="RY_vertical train_info_list train-info hide_action"]').click()
    cy.get('a[class="RY_logo"]').click()
    //cy.get('a[href="/seat-availability?utm_source=pnr_search_dweb_header_sa"]').click()
    //cy.get('span[class="Header_ryHeadingSpan__ODDbF"]').eq('4').click()ÇALIŞIYO SİLME!

    //cy.get('a[class="sub_title"]').click({force: true})
    //cy.get('label[class="jsx-96366342a1937096 Header_dropDown___89lY"]').should('have.value', 'Train information').click()
   
    
})
Cypress.Commands.add('Signin', (useMobile) => {
    cy.get('a[class="RY_vertical IntrCity_bus"]').click()
    cy.get('div[class="jsx-96366342a1937096 Header_signInBlock__iByM_"]').click({force: true})
    cy.get('div[class="jsx-96366342a1937096 Header_loginWrapper__lyqeR"]').click({force: true})
    cy.get('button[aria-disabled="true"]').contains('Continue').click()
    cy.get('div[class="jsx-8d37940ae00d92be Auth_autoIn__gyBwD"]').click()
    cy.get('span[class="jsx-8d37940ae00d92be Auth_closeBtn__qijf_"]').click()
    })
    Cypress.Commands.add('Pnr', (pnr) => {
        cy.get('div[class="jsx-96366342a1937096 Header_logo__Jzm0b"]').click()
        cy.get('div[id="item"]').click({force: true})
        cy.get('input[id="search_status"]').click({force: true}).type('334')
        cy.get('a[class="RY_logo"]').click()
    })
    Cypress.Commands.add('BookaMeal', (meal) => {
        cy.get('div[class="tab_title"]').eq('2').click( {force: true})
        cy.get('img[src="https://images.railyatri.in/assets/dweb/booking/meal-099d7780b31aa2632ae637a062414ac7624a37b1c1e15043cd32f308457dfb64.png"]').click({force: true})
        cy.get('input[class="form-control from trainpicker select_focus ui-autocomplete-input"]').click({force: true}).type('536')
        cy.get('input[id="pnr_meal"]').click ({force: true}).type('3553')
        cy.get('input[id="station_meal"]').click({force: true}).type('dfdf')
        cy.get('button[class="btn btn-default"]').eq('2').click({force: true})
    })
    Cypress.Commands.add('ContactUs', (contact) => {
        cy.get('a[class="RY_logo"]').click()
        cy.get('a[class="RY_vertical more_search hide_action"]').click()
        cy.get('a[href="/contact-us"]').click()
        cy.get('input[class="form-control search-icons-input"]').eq('0').click().type('sdf')
        cy.get('input[id="phone_number"]').click().type('345')
        cy.get('input[class="form-control search-icons-input"]').eq('1').click().type('şlösdlö')
        cy.get('input[placeholder="Subject"]').type('jscjc')
        cy.get('textarea[name="message"]').type('sdfsfjhjhg')
        cy.get('input[id="button"]').click()
     })
     Cypress.Commands.add('Cancellations', (cancellations, refunds) => {
        cy.get('a[class="RY_logo"]').click()
        cy.get('a[class="RY_vertical more_search hide_action"]').click()
        cy.get('a[href="https://refunds.railyatri.in"]').click()
        cy.get('input[id="order_id_rt"]').click().type('xcvxv356363')
        cy.get('input[name="mobile_no"]').click().type('43534')
        cy.get('div[class="col-xs-12 mweb-nopad"]').eq('6').click({force: true})
        cy.get('p[class="input_label"]').eq('7').click()
        cy.get('input[type="button"]').eq('2').click({force: true})
        cy.get('button[class="track_refund"]').click()
        cy.get('span[class="radio_checkmark"]').eq('4').click()
        cy.get('input[id="order_id_rt"]').click().clear('').type('3435')
        cy.get('input[name="mobile_no"]').click().clear('').type('dfvdv')
        })

    Cypress.Commands.add('foodOnTrainStations', (foodAtSurat, ) => {
        cy.get('a[class="RY_logo"]').click()
        cy.get('div[class="col-md-4 travel_route"]').eq('1')
        cy.get('p[class="route_title"]').should('have.text', 'Popular Bus RoutesPopular Food on Train StationsOther Useful Links').eq('1').click( {force: true})
        cy.get('a[class="route_name"]').eq('9').click({force: true})
    })
      