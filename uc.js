//copyright 2015 Indy Prieto under the GPL v2.0 license
function encryptable(str) {
    var keygen = function() {
        var key = {};
        var alp1 = ["a_", "b_", "c_", "d_", "e_", "f_", "g_", "h_",
            "i_", "j_", "k_", "l_", "m_", "n_", "o_", "p_", "q_",
            "r_", "s_", "t_", "u_", "v_", "w_", "x_", "y_", "z_"
        ];
        var alp2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
            "v", "w", "x", "y", "z"
        ];
        var i;
        var ul = [];
        var a;
        var x = true;

        function test() {
            x = false;
            for (a = 0; a < ul.length; a++) {
                if (alp1[num] == ul[a]) {
                    x = true;
                }
            }
        }
        var num;
        for (i = 0; i < alp1.length; i++) {
            x = true;
            while (x) {
                num = Math.floor(Math.random() * alp1.length);
                if (!(ul == [])) {
                    test();
                } else {
                    x = false;
                }
            }
            key[alp2[i]] = alp1[num];
            ul[i] = alp1[num];
        }
        return key;
    };
    var obj = {};
    obj.en = str.split('');
    var c;
    obj.key = keygen();
    for (c = 0; c < obj.en.length; c++) {
        obj.en[c] = obj.key[obj.en[c]];
    }
    obj.en = obj.en.join('^');
    var nkey = {};
    for (var n in obj.key) {
        nkey[obj.key[n]] = n;
    }
    obj.key = nkey;
    return obj;
}

function decryptable(st, key) {
    var mast = st.split('^');
    var non;
    for (non = 0; non < mast.length; non++) {
      if(!(mast[non] == '')){
        mast[non] = key[mast[non]];
      }else{
        
        mast[non] = ' ';
      }
      
    }
    mast = mast.join('');
    return mast;
}