#!/usr/bin/env python
# -*- coding: utf-8 -*-
val = input("please input temperature with signal(e.g. 32C)\n")
if val[-1] in ['C', 'c']:
    f = 1.8 * float(val[0:-1]) + 32
    print("value after transfered: %.2fF"%f)
elif val[-1] in ['F', 'f']:
    c = (float(val[0:-1]) - 32) / 1.8
    print("value after transfered: %.2fC"%c)
else:
    print("input error")
