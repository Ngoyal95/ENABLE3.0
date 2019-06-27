from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextField, TextAreaField
from wtforms.validators import DataRequired, Email

class LoginForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])
    submit = SubmitField('log in')

class HelpForm(FlaskForm):
    firstname = StringField('first name', validators=[DataRequired()])
    lastname = StringField('last name', validators=[DataRequired()])
    email = StringField('Email Address', validators=[DataRequired(),Email(message=None)])
    subject = TextField("Subject", validators=[DataRequired()])
    message = TextAreaField("Message", validators=[DataRequired()])
    submit = SubmitField('Submit')