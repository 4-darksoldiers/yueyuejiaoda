import datetime
import time
import uuid

from api.models import TyAdminSysLog


def log_save(user, request, flag, message, log_type):
    log = TyAdminSysLog(
        user_name=user,
        ip_addr=request.META['REMOTE_ADDR'],
        action_flag=flag,
        message=message,
        log_type=log_type
    )
    log.save()


# encoding: utf-8
from random import Random

from django.conf import settings
#from django.core.mail import EmailMessage

#from tyadmin_api.models import TyAdminEmailVerifyRecord


def random_str(random_length=8):
    str_base = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(random_length):
        str_base += chars[random.randint(0, length)]
    return str_base

def save_uploaded_file(f, to_path):
    with open(to_path, 'wb+') as to_file:
        for chunk in f.chunks():
            to_file.write(chunk)


def gen_file_name(file_name):
    today = datetime.date.today()
    name = str(today) + "-" + str(uuid.uuid4()) + "-" + file_name
    return name


if __name__ == '__main__':
    gen_file_name("123")
