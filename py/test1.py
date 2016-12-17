#!/usr/bin/env python
# coding=utf-8
s = 'abcdefg'
for i in dir(s):
    help(getattr(s, i));
