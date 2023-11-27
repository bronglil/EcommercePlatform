export const getBootcamps = (req, res, next) => {
        return res.status(200).json({success: true, msg: "Get bootcamp"});
}

export const getSingleBootcamp = (req, res, next) => {
    return res.status(200).json({success: true, msg: "Get bootcamp by id"});
}

export const postBootcamp = (req, res, next) => {
    return res.status(200).json({success: true, msg: "post bootcamp"});
}

export const updateBootcamp = (req, res, next) => {
    return res.status(200).json({success: true, msg: "put/update bootcamp by id"});
}

export const deleteBootcamp = (req, res, next) => {
    return res.status(200).json({success: true, msg: "delet bootcamp"});
}