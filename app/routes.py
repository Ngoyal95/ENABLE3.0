"""
route.py is used to connect the page requests with their proper html files
"""
from flask import Flask, render_template, request, redirect, url_for
from app import app
from app.forms import LoginForm, HelpForm

@app.route('/', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect(url_for('home'))
    return render_template('login.html', form=form)

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/help', methods=['GET', 'POST'])
def help():
    form = HelpForm()
    if request.method == 'POST':
        return redirect(url_for('submit_success'))

    elif request.method == 'GET':
        return render_template('help.html', form=form)
    return render_template('help.html', form=form)

@app.route('/submit_success')
def submit_success():
    return render_template('submit_success.html')

@app.route('/data_viewer')
def data_viewer():
    return render_template('data_viewer.html')

@app.route('/upload')
def upload():
    return render_template('upload.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/plotter')
def plotter():
    return render_template('plotter.html')