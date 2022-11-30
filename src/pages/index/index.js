import './index.css';
import jQuery from 'jquery';


jQuery(document).ready(function() {
  jQuery('nav div:nth-child(3)').click(function() {
    jQuery('nav').css('backgroundColor', 'rgba(255, 255, 255, 0.5)');
    jQuery('nav div:nth-child(2)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(4)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(5)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(3)').css('backgroundColor', '#000000').css('color', '#ffffff').css('boxShadow', 'inset 0 2px 4px 0 rgba(0,0,0, 0.35)').css('boxShadow', '0 50px 60px 0 rgba(0,0,0, 0.6)');
    jQuery('#blow').css('display', 'block');
    jQuery('#button').css('display', 'none');
    jQuery('#work').css('display', 'none');
    jQuery('#contact').css('display', 'none');
    jQuery('#about').css('display', 'block');
  });
  
  jQuery('nav div:nth-child(4)').click(function() {
    jQuery('nav').css('backgroundColor', 'rgba(255, 255, 255, 0.5)');
    jQuery('nav div:nth-child(2)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(3)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(5)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(4)').css('backgroundColor', '#000000').css('color', '#ffffff').css('boxShadow', 'inset 0 2px 4px 0 rgba(0,0,0, 0.35)').css('boxShadow', '0 50px 60px 0 rgba(0,0,0, 0.6)');
    jQuery('#blow').css('display', 'block');
    jQuery('#button').css('display', 'none');
    jQuery('#work').css('display', 'block');
    jQuery('#contact').css('display', 'none');
    jQuery('#about').css('display', 'none');
  });
  
  jQuery('nav div:nth-child(5)').click(function() {
    jQuery('nav').css('backgroundColor', 'rgba(255, 255, 255, 0.5)');
    jQuery('nav div:nth-child(2)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(4)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(3)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(5)').css('backgroundColor', '#000000').css('color', '#ffffff').css('boxShadow', 'inset 0 2px 4px 0 rgba(0,0,0, 0.35)').css('boxShadow', '0 50px 60px 0 rgba(0,0,0, 0.6)');
    jQuery('#blow').css('display', 'block');
    jQuery('#button').css('display', 'none');
    jQuery('#work').css('display', 'none');
    jQuery('#contact').css('display', 'block');
    jQuery('#about').css('display', 'none');
  });
  
  jQuery('nav div:nth-child(2)').click(function() {
    jQuery('nav').css('backgroundColor', 'transparent');
    jQuery('nav div:nth-child(3)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(4)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(5)').css('backgroundColor', 'transparent').css('color', '#442e1a').css('boxShadow', 'none');
    jQuery('nav div:nth-child(2)').css('backgroundColor', '#000000').css('color', '#ffffff').css('boxShadow', 'inset 0 2px 4px 0 rgba(0,0,0, 0.35)').css('boxShadow', '0 50px 60px 0 rgba(0,0,0, 0.6)');
    jQuery('#blow').css('display', 'flex');
    jQuery('#button').css('display', 'block');
    jQuery('#work').css('display', 'none');
    jQuery('#contact').css('display', 'none');
    jQuery('#about').css('display', 'none');
  });
});