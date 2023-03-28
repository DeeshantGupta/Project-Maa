class food:
    food_name = ""
    url = ""
    tagz = ""

    def __init__(self):
        self.food_name = input("Food Name - ")
        self.url = input("Url - ")
        try:
            self.url = "https://drive.google.com/uc?id="+self.url.split("/")[5]
        except:
            self.url = ""
        self.tagz = input("Tag - ")


items = [{'name': 'Oranges', 'url': 'https://drive.google.com/uc?id=1uCxKCnKJz9epn6UivYFy4ARHDKQA5-9q', 'tag': ['Vitamin-C', 'Fruit']}, {'name': 'Strawberry', 'url': 'https://drive.google.com/uc?id=1WsXu6Jhnqv_eND4NqSEyZLTyCoStWeks', 'tag': ['Vitamin-C', 'Fruit']}, {'name': 'Tomato', 'url': 'https://drive.google.com/uc?id=14Ci4MAiVW4rr_x_qkJOODfmgkSvdu6Eo', 'tag': ['Vitamin-C', 'Vegetables']}, {'name': 'Lean meat', 'url': 'https://drive.google.com/uc?id=1thKRIw0RyPa_cV10pW_Jtkc5-HUgDnI2', 'tag': ['Iron', 'nonveg']}, {'name': 'Cooked seafood', 'url': 'https://drive.google.com/uc?id=1XzAsYds1U41qyhFFrrTLhM2uUA_4Ni-Y', 'tag': ['Iron', 'nonveg']}, {'name': 'Leafy green vegetables', 'url': 'https://drive.google.com/uc?id=10JDKHYJoqnfILIpxCEtrYSMUUHQw3Vxn', 'tag': ['Iron', 'Vegetables']}, {'name': 'Nuts', 'url': 'https://drive.google.com/uc?id=1b_UdZfQHiobXSCtyXuhCWaAcpVrs7Gey', 'tag': ['Iron', 'Others']}, {'name': 'Beans & lentils', 'url': 'https://drive.google.com/uc?id=1evIh8pi7PuP5rJTJ4BxEJX2Kq9ED4S72', 'tag': ['Iron', 'Others']}, {'name': 'Whole grain bread', 'url': 'https://drive.google.com/uc?id=1xbtuiyiPAxdZnveFEREN1OuSnTYUYBYQ', 'tag': ['Iron', 'Others']}, {'name': 'Fortified breakfast cereals', 'url': 'https://drive.google.com/uc?id=1YdTD-cmAxnRAQ4XJA5hWZLGXKrUhU0w9P', 'tag': ['Iron', 'Others']}, {'name': 'Lean meat', 'url': 'https://drive.google.com/uc?id=1thKRIw0RyPa_cV10pW_Jtkc5-HUgDnI2', 'tag': ['Protein', 'nonveg']}, {'name': 'Nuts', 'url': 'https://drive.google.com/uc?id=1b_UdZfQHiobXSCtyXuhCWaAcpVrs7Gey', 'tag': ['Protein', 'Others']}, {'name': 'Tofu', 'url': 'https://drive.google.com/uc?id=13nS7RlbuLjI_3phrkIR8Y5RmVSxltoZu', 'tag': ['Protein', 'Dairy']}, {'name': 'Eggs', 'url': 'https://drive.google.com/uc?id=1UArW3R2Y6Dw0YuNGN_26uRVNpoiSwdSR', 'tag': ['Protein', 'nonveg']}, {'name': 'Beans and lentils', 'url': 'https://drive.google.com/uc?id=1evIh8pi7PuP5rJTJ4BxEJX2Kq9ED4S72', 'tag': ['Protein', 'Others']}]

def data():
    global items
    q = 1
    while q==1:
        f = food()
        items.append({'name':f.food_name.capitalize(), 'url':f.url, 'tag':f.tagz.split(', ')})
        q = int(input("1/0----> "))
        del f
    if q==0:
        print(items)

data()
