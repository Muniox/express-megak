function showErrorPage(res, description) {
    return res.render('error', {
            description: description
        });

}

module.exports = {
    showErrorPage,
};
