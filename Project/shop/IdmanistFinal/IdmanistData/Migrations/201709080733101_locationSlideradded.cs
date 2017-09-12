namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class locationSlideradded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MainSlider", "sliderLocation", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.MainSlider", "sliderLocation");
        }
    }
}
