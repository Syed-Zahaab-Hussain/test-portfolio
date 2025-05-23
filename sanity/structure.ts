import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("stat").title("Stats"),
      S.documentTypeListItem("faq").title("FAQS"),
      S.documentTypeListItem("course").title("Courses"),
      S.documentTypeListItem("achievement").title("Achievements"),
      S.documentTypeListItem("pricingPlan").title("PricingPlans"),
      S.documentTypeListItem("review").title("Reviews"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "post",
            "category",
            "author",
            "stat",
            "faq",
            "course",
            "achievement",
            "pricingPlan",
            "review",
          ].includes(item.getId()!)
      ),
    ]);
