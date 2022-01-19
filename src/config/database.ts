const { MAIL_USER, MAIL_PASSWORD } = process.env;

const uri = `mongodb+srv://wylgneremiliano:<${process.env.MAIL_PASSWORD}>@cluster0.qu3ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
export default {
  uri,
};
