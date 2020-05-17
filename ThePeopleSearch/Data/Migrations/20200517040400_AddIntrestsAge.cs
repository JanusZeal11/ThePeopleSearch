using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePeopleSearch.Data.Migrations
{
    public partial class AddIntrestsAge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Persons",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Interests",
                table: "Persons",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 3, "Wasabi,Positivity,Dorthy,Tricycle" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 47, "Cookies,Cookie Dough,Cookies,Bakeries,Cookies" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 6, "Alphabet,Life,Numbers" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 7, "W,Bernice,Paper Clips,Bottlecaps" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 6525782, "Counting,Bats,Pipe Organ" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 4, "Helping People,Theater,Music" });

            migrationBuilder.UpdateData(
                table: "Persons",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Age", "Interests" },
                values: new object[] { 43, "Slimy,Napping,Trash" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Interests",
                table: "Persons");
        }
    }
}
