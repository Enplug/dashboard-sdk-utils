/**
 * @ngdoc service
 * @name ColorTools
 * @module enplug.sdk.utils
 * @source https://gist.github.com/emanuel-sanabria-developer/5793377
 */

 angular.module('enplug.sdk.utils').factory('ColorTools', [function () {
    
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgb2hsl (r, g, b) {

        var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

        if (diff == 0) {
            h = s = 0;
        } else {
            s = diff / v;
            rr = diffc(r);
            gg = diffc(g);
            bb = diffc(b);

            if (r === v) {
                h = bb - gg;
            }else if (g === v) {
                h = (1 / 3) + rr - bb;
            }else if (b === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }else if (h > 1) {
                h -= 1;
            }
        }
        return [h, s, v ]
    }

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */
    function hsl2rgb (h,s,v) {
        var r,g,b,i,f,p,q,t,hue;
        if (h.h !=null){
            v=h.b;
            s=h.s;
            h=h.h;
        }
        h%=360;
        if (h<1) h*=360;
        s=s>1?1:s<0?0:s;
        v=v>1?1:v<0?0:v;
        hue=h
        if (s==0) r=g=b=v;
        else {
            h/=60;
            f=h-(i=Math.floor(h));
            p=v*(1-s);
            q=v*(1-s*f);
            t=v*(1-s*(1-f));
            switch (i) {
                case 0:r=v; g=t; b=p; break;
                case 1:r=q; g=v; b=p; break;
                case 2:r=p; g=v; b=t; break;
                case 3:r=p; g=q; b=v; break;
                case 4:r=t; g=p; b=v; break;
                case 5:r=v; g=p; b=q; break;
            }
        }
        return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)]
    }

    /**
     * Converts HEX color value to Array of integer representing the Red Green Blue channels.
     *
     * @param   Number  hex     The hex value FFFFFF
     * @return  Array of 3 Number  The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function hex2rgb (hex) {
        return [ (hex >> 16) & 255, (hex >> 8) & 255, hex & 255 ];
    }

    /**
     * Converts RGB color value to array of hex representing the Red Green Blue channels.
     *
     * @param   Number  r           red [0,1]
     * @param   Number  g           red [0,1]
     * @param   Number  r           red [0,2]
     * @return  Array ofb3 Number   The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function rgb2hex ( r, g, b) {
        var hex = (r*65536+g*256+b).toString(16,6);
        while ( hex.length < 6 ) {
            hex = '0'+hex;
        }
        return hex;
    }

    return {
        rgb2hsl: rgb2hsl,
        hsl2rgb: hsl2rgb,
        hex2rgb: hex2rgb,
        rgb2hex: rgb2hex
    };
}]);
