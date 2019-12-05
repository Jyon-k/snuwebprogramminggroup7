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
    'cookie': "__utma=134997939.1340164299.1472112698.1504232470.1512035733.4; _ga=GA1.3.1340164299.1472112698; WMONID=z32M4ZJHE7Y; enter=Y; JSESSIONID=nILc0RZ2FglItJhfe3DdWRLEpFUY7Pb8XOcrd208tvPCPt1pU5UCi48maH1ORBWj.giants1_servlet_engine2",
    'cache-control': "no-cache",
    'postman-token': "efa451cf-a6c2-5374-c660-42f69dd5f82a"
    }

while True:
    sleep(random.randrange(5,10))
    conn.request("GET", "/sugang/cc/cc210.action", headers=headers)

    res = conn.getresponse()
    data = res.read()

    soup = BeautifulSoup(data, "html.parser")
    all_tds = soup.find_all("td")

    print(all_tds)

    '''
    for td in all_tds:
        print(str(idx) + str(td))
        idx = idx + 1
    '''
    td = all_tds[1]
    if int((str(td).split(">")[1]).split("<")[0]) < 15:
	    notify(title = 'See Sugang Site', subtitle = 'right now', message = 'there is a room')
    else:
        print(int((str(td).split(">")[1]).split("<")[0]))
    if int((str(td).split(">")[1]).split("<")[0]) < 15:
        break
