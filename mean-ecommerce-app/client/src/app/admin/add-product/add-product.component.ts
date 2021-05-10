import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  addProductForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(5)]],
    company: ["", [Validators.required]],
    category: ["", [Validators.required]],
    price: ["", Validators.required],
    description: ["", Validators.required],
    image: ["", Validators.required]
  });

  // Features = [""];
  Categories = ["Electronics", "Fashion", "Food"];
  Companies = ["Apple", "Samsung", "Google", "Mi", "RealMe"];
  ngOnInit() {}

  // run when file field changes
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addProductForm.get("image").setValue(file);
    }
  }

  error;

  addProduct() {
    let product = this.addProductForm.value;
    let fd = new FormData();
    fd.append("name", product.name);
    fd.append("company", product.company);
    fd.append("category", product.category);
    fd.append("price", product.price);
    fd.append("description", product.description);
    fd.append("image", product.image);

    this.productService.addProduct(fd).subscribe(
      result => {
        this.router.navigate(["/all"]);
      },
      err => {
        this.error = err.error;
        console.log("Error Occured", err);
      }
    );
  }
}
