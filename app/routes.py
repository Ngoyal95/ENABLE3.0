"""
route.py is used to connect the page requests with their proper html files
"""
from flask import render_template
from app import app
from app.forms import LoginForm

@app.route('/', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect(url_for('home'))
    return render_template('login.html', form=form)


@app.route('/home', methods=['GET', 'POST'])
def home():
    return render_template('home.html')