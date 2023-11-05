module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: `EMAIL_ADDRESS_FROM`,
                subject: 'Đăng ký thành công',
                text: 'Đăng ký thành công',
                html: `<h4>Bạn đã đăng ký thành công chúng tôi sẽ liên lạc với bạn sớm nhất có thể!</h4>`,
            });
        } catch (error) {

        }
    }
}