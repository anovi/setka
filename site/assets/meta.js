export default function meta(params) {
    var res = [];

    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            if (param.match(/^og:/)) {
                res.push({ hid: param, property: param, content: params[param] });
            } else {
                res.push({ hid: param, name: param, content: params[param] });
            }
        }
    }

    return res;
};
