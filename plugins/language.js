export default (context, inject) => {
    inject('tt', (tm, en, ru) => {
        if (context.app.i18n.locale === 'Turkmen') return tm
        else if (context.app.i18n.locale === 'English') return en
        return ru
    })
}