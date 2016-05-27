desc "Refreshes materialized views"
task refresh_materialized_views: :environment do
  ActiveRecord::Base.connection.execute %{
  refresh materialized view concurrently customer_details
}
end