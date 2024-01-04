import frappe

@frappe.whitelist(allow_guest=True)
def get_product_list():
    products = frappe.get_all('Product', filters={}, fields=['*'])
    return products
@frappe.whitelist()
def get_list(*args,**kwargs):
    products = frappe.get_all("Product_Image", filters={"parent": kwargs.get('id')}, fields=["custom_field", "name", "uri_image"])
    return products
@frappe.whitelist(methods=["POST"])
def deleteList(*args,**kwargs):
    try:
        # Chuyển đổi ids từ chuỗi JSON thành danh sách Python
        ids_list = frappe.parse_json(kwargs.get('items'))

        # Lặp qua danh sách ids và thực hiện xóa
        for id in ids_list:
            # Thực hiện xóa cho mỗi id
            frappe.delete_doc(kwargs.get('doctype'), id)

        return {"status": "success", "message": "Deleted successfully"}
    except Exception as e:
        return {"status": "error", "message": str(e)}