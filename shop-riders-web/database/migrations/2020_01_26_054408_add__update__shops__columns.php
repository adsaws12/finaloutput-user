<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUpdateShopsColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('shops', function (Blueprint $table) {
            $table->integer('user_id')->unique()->index();
            $table->string('start_time')->nullable();
            $table->string('end_time')->nullable();
            $table->string('service')->nullable();
            $table->string('contact')->nullable();
            $table->string('personel')->nullable();
            $table->string('priceofcar')->nullable();
            $table->string('priceofmotor')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shops', function (Blueprint $table) {
            $table->dropColumn('user_id');
            $table->dropColumn('start_time');
            $table->dropColumn('end_time');
            $table->dropColumn('service');
            $table->dropColumn('contact');
            $table->dropColumn('personel');
            $table->dropColumn('priceofcar');
            $table->dropColumn('priceofmotor');
        });
    }
}
