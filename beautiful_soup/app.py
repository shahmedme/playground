# Author of this program: Shakil Ahmed
# GitHub: github.com/shakilahmmeed

import requests
from bs4 import BeautifulSoup
from csv import writer

pageNo = 1
username = input('Enter the username: ')
pagination = 1
authorName = []
saleAmount = []
info = []
following = 0

while pagination:
    url = 'https://themeforest.net/user/' + username + '/following?page={}'.format(pageNo)
    # print(url)
    pageNo = pageNo + 1
    response = requests.get(url)
    code = BeautifulSoup(response.text, 'html.parser')
    author = code.select('.user-info__username > a')
    sale = code.select('.sale-count')
    pagination = code.find(class_='pagination__list')

    for i in range(len(author)):
        authorName.append(author[i].text)

    for i in range(len(sale)):
        saleAmount.append(sale[i].text)

for i in range(len(authorName)):
    info.append([authorName[i], saleAmount[i]])
    following +=1

print(following)

with open('themeforest-author-data.csv', 'w') as csv_file:
    csv_writer = writer(csv_file)
    headers = ['Author Name', 'Sell Amount']
    csv_writer.writerow(headers)

    for i in range(len(info)):
        author_name = info[i][0]
        sell_amount = info[i][1]
        csv_writer.writerow([author_name, sell_amount])