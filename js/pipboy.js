$(document).ready(function(){
    console.log('load')
    var weapons = [{
        'name':'44_pistol',
        'damage':48,
        'damage_per_second':28.8,
        'ammo':6,
        'fire_rate':6,
        'range':119,
        'accuracy':66,
        'critical':"?",
        'value_to_weight_ratio':23.6,
        'form_id':'000CE97D',
        'ap':35,
        'damgage_per_action_shot':1.2,
        'weight':4.2,
        'value':99
    },
    {
        'name':'10mm_pistol',
        'damage':18,
        'damage_per_second':82.8,
        'ammo':12,
        'fire_rate':46,
        'range':119,
        'accuracy':61,
        'critical':'?',
        'value_to_weight_ratio':14.3,
        'form_id':'00004822',
        'ap':28,
        'damgage_per_action_shot':1.5,
        'weight':4.2,
        'value':53
    },
    {
        'name':'assault-rifle',
        'damage':30,
        'damage_per_second':120,
        'ammo':32,
        'fire_rate':40,
        'range':119,
        'accuracy':72,
        'critical':'?',
        'value_to_weight_ratio':11,
        'form_id':'0000463F',
        'ap':32,
        'damgage_per_action_shot':0.94,
        'weight':13.1,
        'value':144
    },
    {
        'name':'anti_material_rifle',
        'damage':50,
        'damage_per_second':10,
        'ammo':3,
        'fire_rate':2,
        'range':119,
        'accuracy':71,
        'critical':'?',
        'value_to_weight_ratio':11,
        'form_id':'0000463F',
        'ap':26,
        'damgage_per_action_shot':1.91,
        'weight':12,
        'value':55
    },
    {
        'name':'combat_rifle',
        'damage':50,
        'damage_per_second':100,
        'ammo':8,
        'fire_rate':20,
        'range':47,
        'accuracy':23,
        'critical':'?',
        'value_to_weight_ratio':7.8,
        'form_id':'0014831C',
        'ap':35,
        'damgage_per_action_shot':1.43,
        'weight':11.1,
        'value':87
    },
    {
        'name':'justice',
        'damage':50,
        'damage_per_second':100,
        'ammo':8,
        'fire_rate':20,
        'range':35,
        'accuracy':28,
        'critical':'?',
        'value_to_weight_ratio':7.8,
        'form_id':'001F61E4',
        'ap':'N/A',
        'damgage_per_action_shot':"N/A",
        'weight':15.5,
        'value':1076
    },
    {
        'name':'pipe_gun',
        'damage':13,
        'damage_per_second':71.5,
        'ammo':12,
        'fire_rate':55,
        'range':83,
        'accuracy':57,
        'critical':'?',
        'value_to_weight_ratio':8.7,
        'form_id':'00024f55',
        'ap':30,
        'damgage_per_action_shot':0.43,
        'weight':2.3,
        'value':20
    },
    {
        'name':'big_boy',
        'damage':486,
        'damage_per_second':'N/A',
        'ammo':1,
        'fire_rate':1,
        'range':117,
        'accuracy':39,
        'critical':'?',
        'value_to_weight_ratio':404.07,
        'form_id':'N/A',
        'ap':'N/A',
        'damgage_per_action_shot':"N/A",
        'weight':30.7,
        'value':12405
    }
    ];

  
    
$('.item-list a').on('click',function(e){
    $('.item-list a').removeClass('active')
    $(e.currentTarget).addClass('active')
})
$('.item-list a').on('mouseenter',function(e){
    var mousingove=$(e.currentTarget).attr('class')
    console.log(mousingove)

    for(item in weapons ){
        if(weapons[item].name  == mousingove){
            console.log(weapons[item])

            var container = $('.item-stats ')
    container.find('.damage').html(weapons[item].damage);
    container.find('.fire_rate').html(weapons[item].fire_rate);
    container.find('.range').html(weapons[item].range);
    container.find('.accuracy').html(weapons[item].accuracy);
    container.find('.weight').html(weapons[item].weight);
    container.find('.value').html(weapons[item].value);
    container.find('.ammo').html(weapons[item].ammo);
    container.find('.ap').html(weapons[item].ap);
    container.find('.damgage_per_action_shot').html(weapons[item].damgage_per_action_shot);
    container.find('.value_to_weight_ratio').html(weapons[item].value_to_weight_ratio);
    container.find('.form_id').html(weapons[item].form_id);
    container.find('.damage_per_second').html(weapons[item].damage_per_second);
    
    
        }
    }
 
   
})

$('.nav-tabs li button').on('click',function(e){
    $('.nav-tabs li button').removeClass('highlight')
    $(e.currentTarget).addClass('highlight')
    
    
})
// $(".item-list").on('click',function(){
//     
// }
//     // $('#strenth').removeClass('none')
    
//     // 
$('item-lisit li').on('click',function(){
    alert('d')
})
 













})