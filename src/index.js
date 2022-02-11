module.exports = function humanReadable(second) {
    const humanReadable = seconds =>
        [
            ('0' + parseInt(secont / (60 * 60))).slice(-2),
            ('0' + parseInt(secont / 60 % 60)).slice(-2),
            ('0' + second % 60).slice(-2)
            
      ].join(':')
}
