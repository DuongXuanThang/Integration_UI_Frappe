import frappe

@frappe.whitelist(allow_guest=True)
def get_product_list():
    print('Get Product List')
    products = frappe.get_all('Product_VGM')
    return products