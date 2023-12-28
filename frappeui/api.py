import frappe

@frappe.whitelist(allow_guest=True)
def get_product_list():
    products = frappe.get_all('Product', filters={}, fields=['*'])
    return products
 