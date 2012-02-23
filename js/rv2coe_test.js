/*global
  module: true, test: true, equal: true, notEqual: true, ok: true,
  rv2coe: true
 */

function isequalRel(x, y, tol) {
    var EPS = Math.pow(2, -52), // IEEE 754 double precision epsilon
        TOL = 0.000001;
    // if (! tol) {
    //     tol = TOL;
    // }
    return (Math.abs(x - y) <= (tol * Math.max(Math.abs(x), Math.abs(y)) + EPS));
}

module('rv2coe');

test('isEqualRel', function () {
    ok(isequalRel(1, 1, 0.1));
    ok(isequalRel(10, 10, 0.1));
    ok(isequalRel(10, 11, 0.1));
    ok(! isequalRel(10, 12, 0.1));
});

test('one', function () {
    var rets,
        TOL     = 0.000001,
        TOL_BIG = 0.00001,
        p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    //[p,a,ecc,incl,node,argp,nu,m,arglat,truelon,lonper]
    rets = rv2coe([-7.154031e+03, -3.783177e+03, -3.536194e+03], [4.741887e+00, -4.151818e+00, -2.093935e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            8.33761386676391E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            8.63534788134168E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          1.85683924973359E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         5.98090201179474E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.07339636598009E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         5.80945456509634E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           4.40640128740260E+00, TOL_BIG),          "nu=" + nu);
    ok(isequalRel(m,            4.77397163618240E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('two', function () {
    var rets,
        TOL     = 0.000001,
        TOL_BIG = 0.00001,
        p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-2.902003e+04, 1.381984e+04, -5.713337e+03], [-1.768068e+00, -3.235371e+00, -3.952061e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            3.65682058677459E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            3.73594822423577E+04, TOL_BIG),          "a=" + a);
    ok(isequalRel(ecc,          1.45533734945997E-01, TOL_BIG),          "ecc=" + ecc);
    ok(isequalRel(incl,         1.99998326018933E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.76942630683809E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         3.61951064858848E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           5.99841066900104E-01, TOL_BIG),          "nu=" + nu);
    ok(isequalRel(m,            4.49424927263621E-01, TOL_BIG),          "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('three', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    TOL_MED = 0.0001,
    TOL_LAR = 0.001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-3.935698e+03, 4.091098e+02, 5.471336e+03], [-3.374784e+00, -6.635211e+00, -1.942056e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.76987696734073E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.76993170522341E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.84349097011079E-03, TOL_LAR),          "ecc=" + ecc);
    ok(isequalRel(incl,         1.01303526090153E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         9.36802898022852E-01, TOL),              "node=" + node);
    ok(isequalRel(argp,         2.27671549186207E+00, TOL_MED),          "argp=" + argp);
    ok(isequalRel(nu,           5.87825066826855E+00, TOL_MED),          "nu=" + nu);
    ok(isequalRel(m,            5.88048671977880E+00, TOL_MED),          "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('four', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.522392e+04, -1.785296e+04, 2.528040e+04], [1.079042e+00, 8.751874e-01, 2.485683e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.40392528251815E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.65649816193469E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          6.86667894489568E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.12006116599119E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.86991396220991E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.62168603151708E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.61300917623481E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.40179041940903E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('five', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.919032e+04, 9.249013e+03, 2.659671e+04], [-6.249602e-01, 1.324551e+00, 2.495698e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.32541061431701E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.65361566017429E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.07478998156541E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.12715184626514E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.09709821742346E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.71331022190177E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.61335368019068E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.33618779869439E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('six', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.136218e+04, -3.511756e+04, -5.413625e+03], [3.137861e+00, -1.011678e+00, 2.675101e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            3.81933227319006E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            3.82215201354311E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.71613018453269E-02, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.66003947074967E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         5.46575510473817E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         5.71251383722787E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           5.78173770083516E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            5.80739040934485E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('seven', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-3.305221e+03, 3.241084e+04, -2.469717e+04], [-1.301137e+00, -1.151316e+00, -2.833358e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.12950160450614E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.43030009720158E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.31602297034278E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         8.15908712289839E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.02000731505895E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         8.31116889695307E-01, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.28854910034411E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.77560482562712E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('eight', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.826333e+04, 3.815996e+04, 4.186183e+03], [-2.744397e+00, 1.255583e+00, 5.285589e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.25633141586591E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            4.25633766150288E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          1.21135191903448E-03, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.99964204593395E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.14349308758867E-01, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.94487413148677E-01, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.41996643803813E-02, TOL),              "nu=" + nu);
    ok(isequalRel(m,            2.41410946840184E-02, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('nine', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.233983e+04, -2.771144e+03, 1.890458e+04], [-8.712476e-01, 2.600918e+00, 5.815600e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.00822908195064E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            1.46611746817096E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          5.58850224913104E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.08355373109973E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         5.14819421827228E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.27878399474404E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.22884273851437E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.39644443932216E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('ten', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.516691e+05, -5.645205e+03, -2.198516e+03], [-8.691829e-01, -8.707599e-01, 1.565082e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.22365293304400E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            1.07329521001381E+05, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.78766964759492E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         2.00179659918408E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         3.25024987797558E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         3.45374352699320E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.75653707355209E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.47221014376516E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('eleven', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.941046e+04, -1.914303e+04, 2.311406e+04], [5.086022e-01, -1.156882e+00, 2.379923e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.19136949132995E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.64968547036729E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.41871444829254E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.08473556757094E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         3.45558320174942E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.41611463245899E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.68745159551352E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.40573663807801E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twelve', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([3.061048e+02, -5.816457e+03, -2.979558e+03], [3.950664e+00, 3.415333e+00, -5.879974e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.63796499841389E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.64271897497258E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.67519582587339E-02, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.08484314121097E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         1.34977007285450E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.67566470055803E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           5.29018181101701E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            5.33451033639964E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('thirteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([2.541889e+04, 9.342603e+03, 2.361147e+04], [5.128409e-02, 1.213127e+00, 2.429004e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.15932000749090E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.69074591159782E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.54417319132259E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.10786605050375E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.18519640178861E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.42248051161017E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.68559287094608E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.35551921003206E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('fourteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.684344e+03, -3.155595e+04, 3.888999e+03], [2.023056e+00, -2.151306e+00, 2.650658e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.15915078355612E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.45335533845233E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.26308680184141E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.22621488924770E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         3.14134924238219E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         5.16387856439840E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.63741848819887E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.33079134146051E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('fifteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-4.467291e+04, -6.213120e+03, -1.738801e+03], [-3.719475e+00, -1.336673e+00, -6.218883e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.50697215596925E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            2.40976786870555E+05, TOL),              "a=" + a);
    ok(isequalRel(ecc,          9.90604395939719E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         5.28433381368629E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         7.21112413017235E-02, TOL),              "node=" + node);
    ok(isequalRel(argp,         5.07154158741060E-01, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.71092060903838E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            4.22676817801008E-02, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('sixteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.193196e+04, 7.340750e+03, 8.864637e+02], [3.083291e-01, 5.532329e+00, 6.728873e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.03461444975771E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            1.55476478683806E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          5.78405074079034E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.21065359341419E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.55008430463395E-03, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.79070438684970E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.04273350948360E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            8.31851228715890E-01, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('seventeen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.428920e+04, 3.946906e+04, 1.428628e+03], [-2.893205e+00, -1.045448e+00, 1.796342e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.20242087592617E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            4.20245048119224E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.65419717085753E-03, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         6.74671209805306E-02, TOL),              "incl=" + incl);
    ok(isequalRel(node,         1.39028438166303E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         5.45699452325021E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           1.35505071182642E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            1.34986759643305E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('eighteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([8.118185e+03, -4.136841e+04, 4.110467e+00], [3.017697e+00, 5.919943e-01, 9.330158e-04], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.21659666604441E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            4.21659685583210E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.12154856171627E-04, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         3.18674756783703E-04, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.59521769510327E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         1.91739538085197E-03, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.09032602056223E-01, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.08903573243272E-01, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('nineteen', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([4.096868e+04, -9.905992e+03, 1.184947e+01], [7.227568e-01, 2.989645e+00, -1.612611e-04], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.21647861017096E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            4.21647918734217E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          3.69979235697233E-04, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         2.85976184875877E-04, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.29080860555824E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         1.85980278064887E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           6.17851838509859E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            6.17859567161117E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([7.309622e+03, 6.076007e+03, 6.800087e+03], [1.300543e+00, 5.322580e+00, -4.788746e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.79295132612890E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.61234300996053E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          5.60054995788355E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.19528893631712E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.12099296270288E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         2.16041300156839E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.05508631503388E-01, TOL),              "nu=" + nu);
    ok(isequalRel(m,            7.21813883480142E-02, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-one', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.816879e+03, -1.835788e+03, 6.661079e+03], [2.325140e+00, 6.655669e+00, 2.463395e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            7.14171787907180E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            7.14172172052714E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          7.33409334032739E-04, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.71797065738686E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.32447358383434E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         3.31809651394408E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           4.19527552194476E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            4.19655090054006E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-two', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.861676e+04, 3.166152e+03, 1.883342e+04], [-2.076122e+00, 2.838458e+00, 1.586211e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            2.65590752494037E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            2.65596471648983E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          4.64039318972371E-03, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         9.55169726404771E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         5.66861410511826E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.64025630843130E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.68798252791767E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            2.68390280725400E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-three', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-3.990938e+03, 3.052983e+03, 4.155327e+03], [-5.909006e+00, -8.763080e-01, -5.039131e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.51452944709191E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.51453723054468E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          1.09306090641488E-03, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.13442716879013E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.02608851052386E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.88945444324430E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.75546521730686E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.75672534929802E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-four', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-1.164535e+04, 9.793767e+02, 5.517895e+03], [3.407744e+00, -5.183095e+00, -4.929833e-01], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            1.05685920336000E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            1.73566843011105E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          6.25374957429354E-01, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         4.98001106813404E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         2.00570961763798E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         2.97231526817895E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           4.41670936125315E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            5.70394051714897E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-five', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([3.774000e+04, 1.880277e+04, 3.455126e+00], [-1.371035e+00, 2.752106e+00, 3.368828e-04], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            4.21662820452857E+04, TOL),              "p=" + p);
    ok(isequalRel(a,            4.21662821616439E+04, TOL),              "a=" + a);
    ok(isequalRel(ecc,          5.25310107819390E-05, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.36816852635197E-04, TOL),              "incl=" + incl);
    ok(isequalRel(node,         6.10324172654242E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         6.23123980143058E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           6.94110565399423E-01, TOL),              "nu=" + nu);
    ok(isequalRel(m,            6.94043359043748E-01, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-six', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([-5.799243e+03, 2.589148e+03, 2.011545e+03], [2.325207e+00, -4.712567e-02, 7.296234e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.52668542226520E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.53213772420339E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.88909806022195E-02, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.68371092952437E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         2.75760784784415E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.24204543369479E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           2.34990431250375E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            2.30815847400074E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-seven', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([9.318088e+02, -1.017179e+03, 6.529192e+03], [-2.988479e-01, 7.613892e+00, 1.226399e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.65481265948903E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.65486449324798E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.79085159977167E-03, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.43856182643222E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         4.77302888470007E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         4.44148635150427E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.25119015885888E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.25180194824909E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-eight', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([4.474279e+03, -1.447723e+03, 4.619839e+03], [4.712596e+00, 5.668306e+00, -2.701607e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.71965739102068E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.72258156482995E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          2.08561216527540E-02, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         8.99668862904084E-01, TOL),              "incl=" + incl);
    ok(isequalRel(node,         3.72349173970767E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         1.64777009491722E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.85667915538073E-01, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.70201375854753E-01, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});

test('twenty-nine', function () {
    var rets,
    TOL     = 0.000001,
    TOL_BIG = 0.00001,
    p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper;

    rets = rv2coe([1.020692e+03, 2.286563e+03, -6.191556e+03], [-3.746544e+00, 6.467533e+00, 1.827986e+00], 3.986008e+05);
    p           = rets.shift();
    a           = rets.shift();
    ecc         = rets.shift();
    incl        = rets.shift();
    node        = rets.shift();
    argp        = rets.shift();
    nu          = rets.shift();
    m           = rets.shift();
    arglat      = rets.shift();
    truelon     = rets.shift();
    lonper      = rets.shift();
    ok(isequalRel(p,            6.62528213021087E+03, TOL),              "p=" + p);
    ok(isequalRel(a,            6.62601554420727E+03, TOL),              "a=" + a);
    ok(isequalRel(ecc,          1.05207904776945E-02, TOL),              "ecc=" + ecc);
    ok(isequalRel(incl,         1.27117214865807E+00, TOL),              "incl=" + incl);
    ok(isequalRel(node,         2.02021952954979E+00, TOL),              "node=" + node);
    ok(isequalRel(argp,         1.10890553136213E+00, TOL),              "argp=" + argp);
    ok(isequalRel(nu,           3.84788102737272E+00, TOL),              "nu=" + nu);
    ok(isequalRel(m,            3.86161963098100E+00, TOL),              "m=" + m);
    ok(isequalRel(arglat,       9.99999100000000E+05, TOL),              "arglat=" + arglat);
    ok(isequalRel(truelon,      9.99999100000000E+05, TOL),              "truelon=" + truelon);
    ok(isequalRel(lonper,       9.99999100000000E+05, TOL),              "lonper=" + lonper);
});
