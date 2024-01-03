import frappe

@frappe.whitelist(allow_guest=True)
def get_product_list():
    products = frappe.get_all('Product', filters={}, fields=['*'])
    return products
@frappe.whitelist()
def get_list(*args,**kwargs):
    products = frappe.get_all("Product_Image", filters={"parent": kwargs.get('id')}, fields=["custom_field", "name", "uri_image"])
    return products