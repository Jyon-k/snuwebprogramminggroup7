import os
import http.client
from bs4 import BeautifulSoup
from time import sleep
import random

# Thee:notifier function
def notify(title, subtitle, message):
    t = '-title {!r}'.format(title)
    s = '-subtitle {!r}'.format(subtitle)
    m = '-message {!r}'.format(message)
    os.system('terminal-notifier {}'.format(' '.join([m, t, s])))


conn = http.client.HTTPConnection("sugang.snu.ac.kr")

headers = {
    'upgrade-insecure-requests': "1",
    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'referer': "http://sugang.snu.ac.kr/sugang/cc/cc210.action",
    'accept-encoding': "gzip, deflate",
    'accept-language': "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    'cookie': "__utma=134997939.1340164299.1472112698.1504232470.1512035733.4; _ga=GA1.3.153009022.1471459881; WMONID=ZcEeJKZQ0Cg; enter=Y; JSESSIONID=bY62hQqqTxJ1gkGcgNa6wtX2haN28ajMoSX1elaaxc1DVbyZyCPa997a4HpaKj1L.giants2_servlet_engine2",
    'cache-control': "no-cache",
    }

while True:
    sleep(random.randrange(5,10))
    conn.request("GET", "/sugang/cc/cc210.action", headers=headers)

    res = conn.getresponse()
    data = res.read()

    soup = BeautifulSoup(data, "html.parser")
    all_tds = soup.find_all("td")

    idx = 0
    for td in all_tds:
        print(str(idx) + str(td))
        idx = idx + 1

    td = all_tds[1]
    if int((str(td).split(">")[1]).split("<")[0]) < 15:
	    notify(title = 'See Sugang Site', subtitle = 'right now', message = 'there is a room')
    else:
        print(int((str(td).split(">")[1]).split("<")[0]))
    if int((str(td).split(">")[1]).split("<")[0]) < 15:
        break
